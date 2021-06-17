using System;
namespace loginProjet.Services
{
    public class AppData
    {
       private bool canlogin;

        public bool CanLogin
        {
            get { return canlogin; }
            set {  canlogin=value; }
        }
    }
}
