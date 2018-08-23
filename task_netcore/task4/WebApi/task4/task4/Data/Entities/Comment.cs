namespace task4.Data.Entities
{
    public class Comment
    {
        public int Id { get; set; }

        public string Message { get; set; }

        public int MovieId { get; set; }

        public string UserId { get; set; }

        public string UserName { get; set; }
    }
}
