namespace task4.DAL.Entities
{
    public class Comment
    {
        public int Id { get; set; }

        public string Message { get; set; }

        public virtual Movie Movie { get; set; }

        public virtual User User { get; set; }

        public string Date { get; set; }
    }
}
