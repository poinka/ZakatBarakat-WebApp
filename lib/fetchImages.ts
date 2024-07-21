// utils/fetchImages.ts
import { supabase } from '../lib/supabase';

interface ImageDetail {
    name: string;
    url: string;
}

export const fetchImages = async (): Promise<ImageDetail[]> => {
    const { data, error } = await supabase
        .storage
        .from('images')
        .list('', {
            limit: 100,
            sortBy: { column: 'name', order: 'asc' },
        });

    if (error) {
        console.error('Error fetching images:', error);
        return [];
    }

    const imageDetails = await Promise.all(data.map(async (file) => {
        const { data: signedUrlData } = await supabase
            .storage
            .from('images')
            .getPublicUrl(file.name);

        return { name: file.name, url: signedUrlData.publicUrl } as ImageDetail;
    }));

    return imageDetails.filter(detail => detail !== null) as ImageDetail[];
};
