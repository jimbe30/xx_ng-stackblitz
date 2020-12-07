import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // @Input indique que la propriété est passée dans le selector
  @Output() onClickNotify = new EventEmitter(); // @Output indique que la propriété remonte vers le composant parent ; EventEmitter émet un événement lorsque la valeur de `notify` change

  constructor() {}

  ngOnInit() {}
}
