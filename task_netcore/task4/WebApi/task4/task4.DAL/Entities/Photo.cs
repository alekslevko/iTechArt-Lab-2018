namespace task4.DAL.Entities
{
    public class Photo
    {
        public int Id { get; set; }

        public string pictureUrl { get; set; }

        public int MovieId { get; set; }

        public Movie Movie { get; set; }
    }
}
