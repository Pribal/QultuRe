export async function LocationSearch(query: string) {
    query = query.replaceAll(' ', '+');

    try {
        const res = await fetch('https://nominatim.openstreetmap.org/search?format=json&q='+query, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, comme Gecko) Chrome/98.0.4758.82 Safari/537.36'
            }
        });

        if(res.ok) {
            const json = await res.json();
    
            return {lat: json[0].lat, long: json[0].lon};
        }
    }
    catch(e: any) {
        return null;
    }
}