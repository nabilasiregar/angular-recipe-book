import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() navbarSelected = new EventEmitter<string>();
    
    onSelect(navbar: string) {
        this.navbarSelected.emit(navbar);
    }
}