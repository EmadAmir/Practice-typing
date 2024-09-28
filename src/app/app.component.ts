import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { randQuote } from '@ngneat/falso';
import { NgClass, NgFor, NgIf } from '@angular/common';

randQuote();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice-typing';
  randomQuoteText = randQuote();
  valueFromInput = '';
  
  onTypingHandler(event:Event)
  {
    this.valueFromInput = (event.target as HTMLInputElement).value;
    console.log(this.valueFromInput);
  }

  checkIfTheTypedContentMatchesRandomText()
  {
    return this.valueFromInput === this.randomQuoteText;
  }

  compare(randomLetter: string, enteredLetter: string): string
  {
    if(this.valueFromInput == '' || !enteredLetter)
    {
      return "pending";
    }
    return randomLetter === enteredLetter ? "green" : "red"; 
  }
}
