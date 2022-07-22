import { ClienteService } from './../../../shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-form-dialog',
  templateUrl: './cliente-form-dialog.component.html',
  styleUrls: ['./cliente-form-dialog.component.css']
})
export class ClienteFormDialogComponent implements OnInit {

  public clienteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: ClienteService,
    public dialogRef: MatDialogRef<ClienteFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpfCnpj: ['', [Validators.required]],
      endereco: [''],
      numero: [''],
      bairro: [''],
      cep: [''],
      cidade: [''],
      uf: [''],
      telefone: [''],
      email: [''],
      available: [''],
      notAvailable: [''],


    })
  }

  createCliente() {
      this.rest.postCliente(this.clienteForm.value).subscribe(result => { });
      this.dialogRef.close();
      this.clienteForm.reset();
      window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
    this.clienteForm.reset();
  }


}
