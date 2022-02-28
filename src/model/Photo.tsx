class Photo {
    id: string;
    title: string;
    categoryId: number;
    photo: string;

    constructor(id: string, title: string, categoryId: number, photo: string) {
        this.id = id;
        this.title = title;
        this.categoryId = categoryId;
        this.photo = photo;
    }
}

export default Photo;
