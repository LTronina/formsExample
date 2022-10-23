import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-custom-input",
  templateUrl: "./custom-input.component.html",
  styleUrls: ["./custom-input.component.scss", "./../../shared/styles.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() desription: string = "";
  value: string = "";
  disabled: boolean = false;
  onChange!: (value: string) => void;
  onTouched!: () => void;

  constructor() {}
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {}
}
