import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  constructor(private service:SharedService) { }
  //constructor(){}

  DepartmentList:any=[];

  ModalTitle:string="Add Department";
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.deptlist();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }

    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.deptlist();
  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Edit Department",
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item:any){
    if(confirm("Are you sure??")){
      //alert(item.DepartmentId);
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.deptlist();        
      })
    }
  }

  deptlist(){
    this.service.getDeptList().subscribe(data=>{
      this.DepartmentList=data;
    });
  }  

}
