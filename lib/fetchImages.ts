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
        const { data: signedUrlData, error: signedUrlError } = await supabase
            .storage
            .from('images')
            .createSignedUrl(file.name, 60);

        if (signedUrlError) {
            console.error('Error creating signed URL:', signedUrlError);
            return null;
        }

        return { name: file.name, url: signedUrlData.signedUrl } as ImageDetail;
    }));

    return imageDetails.filter(detail => detail !== null) as ImageDetail[];
};
