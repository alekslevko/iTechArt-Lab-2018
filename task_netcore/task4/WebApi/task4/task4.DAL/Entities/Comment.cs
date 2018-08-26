namespace task4.DAL.Entities
{
    public class Comment
    {
        public int CommentId { get; set; }

        public string Message { get; set; }

        public int MovieId { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }

        public string Date { get; set; }
    }
}
