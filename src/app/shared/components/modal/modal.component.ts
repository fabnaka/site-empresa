import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  showModal: boolean = false;

  setShowModal() {
    this.showModal = true;

    // Set a timeout to hide the modal after 2.5 seconds (2500 milliseconds)
    setTimeout(() => {
      this.showModal = false;
    }, 2500);
  }
}
