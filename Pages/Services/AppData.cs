using System;
namespace loginProjet.Services
{
    public class AppData
    {
       private bool canlogin;
       public bool CanLogin
        {
            get { return canlogin; }
            set {  canlogin=value;
                NotifyDataChanged();
            }
        }
        private string username = "";
        public string Username 
        {
            get { return username; }
            set
            {
                username = value;
                NotifyDataChanged();
            }
        }
       
        public event Action OnChange;
 private void NotifyDataChanged() => OnChange?.Invoke();
    }
}
