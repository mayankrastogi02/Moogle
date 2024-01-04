import { supabase } from '@/utils/initSupabase';
import { CharacterTextSplitter, RecursiveCharacterTextSplitter } from "langchain/text_splitter";

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
}

export { readContent, chunkContent };
