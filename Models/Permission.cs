using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PermissionTree.Models
{
    public enum PermissionType
    {
        Module,
        Resource1,
        Resource2
    }

    public class Permission
    {
        public PermissionType Type { get; set; }
        public bool Create { get; set; }
        public bool Read { get; set; }
        public bool Update { get; set; }
        public bool Delete { get; set; }
    }
}
