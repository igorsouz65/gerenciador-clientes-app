import { ClienteService } from './../../../shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente.model';
import { ClienteFormDialogComponent } from '../cliente-form-dialog/cliente-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes!: Cliente[];
  previous: boolean = false;


  constructor(
    public clienteService: ClienteService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientesWithSize(1000).subscribe(data => {
      this.clientes = data.content;
      console.log(this.clientes);
    });
    this.previous = true;
  };

  statusCliente(id: number) {
    this.clienteService.statusCliente(id).subscribe(data => {
      this.clientes = data.content;
    })
    window.location.reload();
  }





}
