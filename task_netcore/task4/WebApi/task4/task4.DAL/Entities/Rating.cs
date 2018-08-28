namespace task4.DAL.Entities
{
    public class Rating
    {
        public int Id { get; set; }

        public decimal Value { get; set; }

        public virtual Movie Movie { get; set; }

        public virtual User User { get; set; }
    }
}