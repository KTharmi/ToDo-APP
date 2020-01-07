export class Task{
    id:string;
    title:string;
    due_date:Date;
    completed:boolean;
    priority:string;

    constructor(title)
    {
        this.id="not set"
        this.title=title;
        this.due_date=new Date();
        this.completed=false;
        this.priority="important";
    }

}