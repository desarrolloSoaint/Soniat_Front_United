




import { Component, OnInit,   } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Country } from 'app/models/country';
import { Router } from '@angular/router';
import { Clientes } from 'app/models/clientes';

@Component({
  selector: 'app-soniat-publico',
  templateUrl: './soniat-publico.component.html',
  styleUrls: ['./soniat-publico.component.css']
})

export class SoniatPublicoComponent implements OnInit{
  public clientes = new Clientes(null,'' );
  public status: string;
  mostrar: boolean = false;
  showContent: number;

  public  id: Array<any>;
  constructor(private authService: AuthService,private router: Router) { 
    
  }

  ngOnInit() {
    this.authService.country().subscribe(
      data => {
        this.id = data;
        console.log(this.id,'err');
      },
      err => {
        console.log(err);
      }
    );

 
    this.showContent = 2;
    
  }

 
  onSubmit1(form) {
    console.log(this.clientes, 'prueba1');
    this.authService.guardar(this.clientes).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = response.status;
         // this.soniat();

          this.ngOnInit();
        } else {
          this.status = response.status;
        }
      });


  }


  toggleBox() {
    this.mostrar = !this.mostrar;
  } 

  soniat(): void {
    this.router.navigate(['soniat']);
    
  }
  
}



