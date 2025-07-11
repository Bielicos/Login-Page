import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.scss'
})
export class DefaultLoginLayout {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';

  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  @Output('navigate') onNavigate = new EventEmitter();

  navigate() {
    this.onNavigate.emit();
  }

  @Input() esconderElemento: boolean = false;
}
