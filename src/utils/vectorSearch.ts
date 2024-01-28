import { supabase } from '@/utils/initSupabase';
import { CharacterTextSplitter, RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { corsHeaders } from '../../supabase/functions/_shared/cors';

// Read single document
const readContent = async () => {
    const { data, error } = await supabase
        .from('webpages')
        .select('id, content')
        .limit(1)
        .single()
    if (error) throw error;
    console.log(data);
    return data;
}

// Chunk read data
const chunkContent = async () => {
    // const data: { id: number, content: string } = await readContent();
    const { id, content } = await readContent();
    // console.log(id);
    // const id = 1;
    // const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a"
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 100,
    });
    const output = await splitter.createDocuments([content]); // array of documents
    console.log(output);
    // output.forEach(async (doc) => {
    //     const embedding = await createEmbeddings(doc.pageContent);
    //     console.log(embedding);
    //     embeddingList.push(embedding);
    // });
    let chunkCounter = 0;
    // for (const doc of output) {
    //     const embedding = await createEmbeddings(doc.pageContent);
    //     console.log(embedding);
    //     supabase
    //         .from('vector_db')
    //         .upsert([
    //             { pageId: id, chunkId: `${id}_chunk_${chunkCounter}`, embedding: embedding.embedding },
    //         ])
    //         .then(response => {
    //             console.log(response);
    //         })

    //     chunkCounter++;
    // }
    searchSimilar();
}

// Create embeddings
const createEmbeddings = async (inputChunk: string) => {
    // const { data, error } = await supabase
    //     .rpc('create_embeddings')
    // if (error) throw error;
    // console.log(data);
    // return data;

    // make POST request
    // POST 'http://127.0.0.1:54321/functions/v1/generate-embeddings' --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' --header 'Content-Type: application/json' --data '{"input":"Functions"}' 
    const bearer: string = process.env.NEXT_PUBLIC_SUPBASE_AUTH_SECRET || '';
    const response = await fetch('http://127.0.0.1:54321/functions/v1/generate-embeddings', {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputChunk }),
    })
    const data = await response.json();
    console.log(data);
    return data;
}

const searchSimilar = async () => {
    const embedding = await createEmbeddings("Hello");
    const { data: documents } = await supabase.rpc('match_documents', {
        query_embedding: embedding.embedding, // Pass the embedding you want to compare
        match_threshold: 0.78, // Choose an appropriate threshold for your data
        match_count: 10, // Choose the number of matches
    })
    console.log(documents);
    return documents;
}

export { readContent, chunkContent };
