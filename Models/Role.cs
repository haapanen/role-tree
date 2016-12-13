using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PermissionTree.Models
{
    public class Role
    {
        public List<Permission> Permissions { get; set; }
        public List<Role> Roles { get; set; }
    }
}
