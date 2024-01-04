import { supabase } from '@/utils/initSupabase';
import { CharacterTextSplitter, RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { corsHeaders } from '../../supabase/functions/_shared/cors';

// Read single document
const readContent = async () => {
    const { data, error } = await supabase
        .from('webpages')
        .select('content')
        .limit(1)
        .single()
    if (error) throw error;
    console.log(data);
    return data.content;
}

// Chunk read data
const chunkContent = async () => {
    const text = await readContent();
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 100,
    });
    const output = await splitter.createDocuments([text]);
    console.log(output);
    output.forEach(async (doc) => {
        const embedding = await createEmbeddings(doc.pageContent);
        console.log(embedding);
    });
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
    const bearer: string = process.env.SUPBASE_AUTH_SECRET || '';
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

export { readContent, chunkContent };
