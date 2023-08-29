import { supabase } from '@/utils/initSupabase';
import { notFound } from 'next/navigation'

export const getPages = async (query: string) => {
    const { data, error } = await supabase
        .from('webpages')
        .select('id, title, url, created_at, desc, name, logo')
        .textSearch('content', query, {
            type: 'websearch',
            config: 'english'
        })
    if (error) throw error;
    return data;
}

