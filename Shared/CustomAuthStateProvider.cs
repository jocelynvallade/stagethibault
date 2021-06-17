using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Authorization;
using System.Security;
using System.Security.Claims;
namespace loginProjet
{
    public class CustomAuthStateProvider : AuthenticationStateProvider
    {
        private readonly Blazored.LocalStorage.ILocalStorageService _localStorage;
        public CustomAuthStateProvider(Blazored.LocalStorage.ILocalStorageService localStorage)
        {
            _localStorage = localStorage;
        }

        public override async Task<AuthenticationState> GetAuthenticationStateAsync()
        {
            var state = new AuthenticationState(new ClaimsPrincipal());
            string username = await _localStorage.GetItemAsync<string>("username");
            if (!string.IsNullOrEmpty(username))
            {
                var identity = new ClaimsIdentity(new[]
                {
                   new System.Security.Claims.Claim(ClaimTypes.Name,username)
                },"Test authentif");
                state = new AuthenticationState(new ClaimsPrincipal(identity));
            }
            NotifyAuthenticationStateChanged(Task.FromResult(state));
            return state;
        }
    }
}
