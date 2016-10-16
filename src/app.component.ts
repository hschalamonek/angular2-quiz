import { Component } from '@angular/core';

import { Question } from './question.model';

@Component({
  selector: 'quiz',
  template: `
    <question *ngFor="let question of questions" [question]="question" [checked]="checked"
      (answered)="onQuestionAnswered(question.id, $event)"></question>
    <p *ngIf="!checked">
      <button [disabled]="!isAllAnswered()" (click)="onCheckClick()">Check</button>
    </p>
    <p *ngIf="checked">
      Score: {{correctAnswers}} / {{questions.length}} ({{correctAnswers / questions.length * 100}}%)
    </p>
  `
})
export class AppComponent {

  questions: Question[];
  checked = false;
  correctAnswers = 0;

  private answers = new Map<string, boolean>();

  onQuestionAnswered(questionId: string, correct: boolean) {
    this.answers.set(questionId, correct);
  }

  isAllAnswered(): boolean {
    return this.answers.size === this.questions.length;
  }

  onCheckClick() {
    this.checked = true;

    this.correctAnswers = 0;
    this.answers.forEach((value, key, map) => {
      if (value) {
        this.correctAnswers++;
      }
    });
  }

  constructor() {
    this.questions = [
      {
        "id": "q1",
        "text": "Property binding with [value]=\"foo\" or interpolation with {{foo}} results in",
        "options": [
          {
            "id": "q1.a1",
            "text": "One-way binding from the component to the view"
          },
          {
            "id": "q1.a2",
            "text": "One-way binding from the view to the component"
          },
          {
            "id": "q1.a3",
            "text": "Two-way binding"
          }
        ],
        "solution": "q1.a1"
      },
      {
        "id": "q2",
        "text": "Event binding with (click)=\"doSomething()\" results in",
        "options": [
          {
            "id": "q2.a1",
            "text": "One-way binding from the component to the view"
          },
          {
            "id": "q2.a2",
            "text": "One-way binding from the view to the component"
          },
          {
            "id": "q2.a3",
            "text": "Two-way binding"
          }
        ],
        "solution": "q2.a2"
      },
      {
        "id": "q3",
        "text": "Using ngModel with [(ngModel)]=\"foo\" results in",
        "options": [
          {
            "id": "q3.a1",
            "text": "One-way binding from the component to the view"
          },
          {
            "id": "q3.a2",
            "text": "One-way binding from the view to the component"
          },
          {
            "id": "q3.a3",
            "text": "Two-way binding"
          }
        ],
        "solution": "q3.a3"
      },
      {
        "id": "q4",
        "text": "ngFor is an example of",
        "options": [
          {
            "id": "q4.a1",
            "text": "Attribute directive"
          },
          {
            "id": "q4.a2",
            "text": "Structural directive"
          },
          {
            "id": "q4.a3",
            "text": "Destructuring assignment"
          }
        ],
        "solution": "q4.a2"
      },
      {
        "id": "q5",
        "text": "ngClass is an example of",
        "options": [
          {
            "id": "q5.a1",
            "text": "Attribute directive"
          },
          {
            "id": "q5.a2",
            "text": "Structural directive"
          },
          {
            "id": "q5.a3",
            "text": "Destructuring assignment"
          }
        ],
        "solution": "q5.a1"
      }
    ];
  }
}
