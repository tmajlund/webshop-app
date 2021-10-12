using System;
using System.Collections.Generic;

#nullable disable

namespace WebshopWebAPI.Models
{
    public partial class Product
    {
        public Product()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int ProductId { get; set; }
        public string Name { get; set; }
        public int? Price { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public int? MinSize { get; set; }
        public int? MaxSize { get; set; }

        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
