import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    ) { }

  shouldShowNavbar(): boolean {
    // Obtener la URL actual
    const currentUrl = this.router.url;

    // Verificar si la URL corresponde a las rutas donde quieres mostrar el Navbar
    return !currentUrl.includes('/login') && !currentUrl.includes('/create');
  }

  public onLogout(): void {
    this.authService.logout()
    this.router.navigateByUrl("/login")
  }
}
