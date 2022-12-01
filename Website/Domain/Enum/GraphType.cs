using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Website.Domain.Enum
{
    public class GraphType : Enumeration
    {
        public static GraphType Bar = new (1, nameof(Bar));
        public static GraphType Line = new (2, nameof(Line));

        public GraphType(int id, string name) : base(id, name)
        {
        }
    }
}