export interface ItemsResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: [ {
        id: number,
        first_name: string;
        last_name: string;
        avatar: string;
    }
    ];
}
