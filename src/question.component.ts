import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Question } from './question.model';

@Component({
    selector: 'question',
    template: `
        <h3>{{question.text}}</h3>
        <div *ngFor="let option of question.options" [class.correct]="checked && (option.id === question.solution)">
            <label>
                <input type="radio" [disabled]="checked" [name]="question.id" [value]="option.id" (click)="onOptionClick(option.id)">
                {{option.text}}
            </label>
        </div>
        <p *ngIf="checked">{{ correct ? 'Correct' : 'Incorrect'}}</p>
    `,
    styles: [`
        .correct {
            color: green;
        }
    `]
})
export class QuestionComponent {

    @Input() question: Question;
    @Input() checked: boolean;
    @Output() answered = new EventEmitter<boolean>();
    correct = false;

    onOptionClick(optionId: string) {
        this.correct = optionId === this.question.solution;
        this.answered.emit(this.correct);
    }
}
