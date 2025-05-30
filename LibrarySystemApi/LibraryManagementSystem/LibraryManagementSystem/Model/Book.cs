namespace LibraryManagementSystem.Model
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string PublicationYear { get; set; }
        public int AuthorId { get; set; }
        public int CategoryId {  get; set; }
    }
}
