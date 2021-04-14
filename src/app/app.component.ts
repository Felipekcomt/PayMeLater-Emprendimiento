import {AfterContentInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private usersService: UserService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  title = 'PayMeLater';
  mobileQuery: MediaQueryList;
  users: any;
  visible = null;
  refresh = null;

  fillerNav = [
    {name: 'Inicio' , route: 'pml', icon: 'account_balance' },
    {name: 'Clientes' , route: 'customer', icon: 'account_circle' },
    {name: 'Agregar Clientes', route: 'addcustomer', icon: 'person_add'},
    {name: 'Marco Legal', route: 'terminos', icon: 'menu_book'},
    {name: 'Soporte', route: 'soporte', icon: 'help_center'}
  ];

  private _mobileQueryListener: () => void;

  shouldRun = true;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.usersService.getUser().subscribe(users => {
      this.users = users;

      for (let i = 0; i < this.users.length; i++)
      {
        if (this.users[i].islogged === true)
        {
          this.visible = true;
        }
      }
    });
  }
  logOut(): any{
    this.visible = false;
    for (let i = 0; i < this.users.length; i++)
    {
      if (this.users[i].islogged === true)
      {
        this.users[i].islogged = false;
        this.refresh = false;
        this.usersService.editUserById(this.users[i].id, this.users[i]).subscribe(() => {});
        this.router.navigate(['/login']);
      }
    }
  }
  Register(): void{
    this.router.navigate(['/register']);
  }
  login(): void{
    this.router.navigate(['/login']);
  }
}

