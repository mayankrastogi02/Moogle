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

