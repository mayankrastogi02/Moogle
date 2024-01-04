import { supabase } from '@/utils/initSupabase';

export const getPages = async (query: string) => {
    const { data, error } = await supabase
        .from('webpages')
        .select('id, title, url, created_at, desc, name, logo, content')
        .textSearch('content', query, {
            type: 'websearch',
            config: 'english'
        })
    if (error) throw error;
    return data;
}

// Create another column that contains the vector embedding of the content column
// Use the vector embedding to search for similar content
// All - MiniLmL6
// spabase pg vecotr search
// semantic search embedding
// chunking