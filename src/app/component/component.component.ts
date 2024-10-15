import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from '../service.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  clients: any[] = [];
  clientForm: FormGroup;
  editingClient: any = null;

  constructor(private service: Service, private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      name: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error al obtener', error);
      }
    );
  }

  onSubmit(): void {
    if (this.editingClient) {
      this.updateClient();
    } else {
      this.createClient();
    }
  }

  createClient(): void {
    const data = this.clientForm.value;
    this.service.create(data).subscribe(
      (response) => {
        console.log('Cliente creado', response);
        this.getAll();
        this.clientForm.reset();
      },
      (error) => {
        console.error('Error al crear el cliente', error);
      }
    );
  }

  editClient(service: any): void {
    this.editingClient = service;
    this.clientForm.patchValue({
      name: service.name,
      address: service.address
    });
  }

  updateClient(): void {
    const data = this.clientForm.value;
    this.service.update(this.editingClient.id, data).subscribe(
      (response) => {
        console.log('Cliente actualizado', response);
        this.getAll();
        this.clientForm.reset();
        this.editingClient = null;
      },
      (error) => {
        console.error('Error al actualizar el cliente', error);
      }
    );
  }

  deleteClient(id: number): void {
    this.service.delete(id).subscribe(
      (response) => {
        console.log('Cliente eliminado', response);
        this.getAll();
      },
      (error) => {
        console.error('Error al eliminar el cliente', error);
      }
    );
  }
}