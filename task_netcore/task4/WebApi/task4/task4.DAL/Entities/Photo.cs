namespace task4.DAL.Entities
{
    public class Photo
    {
        public int Id { get; set; }

        public string PictureUrl { get; set; }

        public virtual Movie Movie { get; set; }
    }
}
