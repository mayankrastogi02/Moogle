import { supabase } from '@/utils/initSupabase';
import { notFound } from 'next/navigation'

export const getPages = async () => {
    console.log('getPages');
    const { data, error } = await supabase
        .from('webpages')
        .select('*')
        .textSearch('content', 'Mayank', {
            type: 'websearch',
            config: 'english'
        })
        .single();
    if (error) throw error;
    return data;
}

