namespace task4.DAL.Entities
{
    public class Rating
    {
        public int RatingId { get; set; }

        public decimal Value { get; set; }

        public int MovieId { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}