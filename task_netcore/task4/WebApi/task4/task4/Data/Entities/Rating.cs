namespace task4.Data.Entities
{
    public class Rating
    {
        public int RatingId { get; set; }

        public decimal Value { get; set; }

        public int MovieId { get; set; }

        public string UserId { get; set; }
    }
}