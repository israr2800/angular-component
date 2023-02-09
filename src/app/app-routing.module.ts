import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthSuccessComponent } from './auth-success/auth-success.component';
import { AuthUpdateListComponent } from './auth-update-list/auth-update-list.component';
import { AuthGuard } from './auth.guard';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChildComponent } from './child/child.component';
import { ClassStylesToggleComponent } from './class-styles-toggle/class-styles-toggle.component';
import { CustomDirectiveResultComponent } from './custom-directive-result/custom-directive-result.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DuplicateArrayComponent } from './duplicate-array/duplicate-array.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { FilterAndSortComponent } from './filter-and-sort/filter-and-sort.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { GeoLocationComponent } from './geo-location/geo-location.component';
import { InputDataonClickComponent } from './input-dataon-click/input-dataon-click.component';
import { InputTrueFalseComponent } from './input-true-false/input-true-false.component';
import { InterviewFailedComponent } from './interview-failed/interview-failed.component';
import { LoadmoreDataComponent } from './loadmore-data/loadmore-data.component';
import { MatPaginationComponent } from './mat-pagination/mat-pagination.component';
import { MinMaxValueComponent } from './min-max-value/min-max-value.component';
import { MultifieldFormArrayComponent } from './multifield-form-array/multifield-form-array.component';
import { NestedArrayComponent } from './nested-array/nested-array.component';
import { ParentComponent } from './parent/parent.component';
import { PassingRoutingDataComponent } from './passing-routing-data/passing-routing-data.component';
import { PdfCreateComponent } from './pdf-create/pdf-create.component';
import { PrintKeyvalueComponent } from './print-keyvalue/print-keyvalue.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { RemoveArrayListComponent } from './remove-array-list/remove-array-list.component';
import { ResponsiveMenusComponent } from './responsive-menus/responsive-menus.component';
import { ReviseApiListComponent } from './revise-api-list/revise-api-list.component';
import { ShowApiListComponent } from './show-api-list/show-api-list.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { TransferArrayComponent } from './transfer-array/transfer-array.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent 
  },
  {
    path: 'loadmore-data',
    component: LoadmoreDataComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'input-true-false',
    component: InputTrueFalseComponent
  },
  {
    path: 'child',
    component: ChildComponent
  },
  {
    path: 'geo-location',
    component: GeoLocationComponent
  },
  {
    path: 'auth-success',
    component: AuthSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth-update-list/:id',
    component: AuthUpdateListComponent
  },
  {
    path: 'auth-login',
    component: AuthLoginComponent 
  },
  {
    path: 'revise-api-list',
    component: ReviseApiListComponent 
  },
  {
    path: 'mat-pagination',
    component: MatPaginationComponent 
  },
  {
    path: 'upload-image',
    component: UploadImageComponent 
  },
  {
    path: 'authentication',
    component: AuthRegisterComponent 
  },
  {
    path: 'view-child',
    component: ViewChildComponent 
  },
  {
    path: 'menus',
    component: ResponsiveMenusComponent 
  },
  {
    path: 'update-data/:id',
    component: UpdateDataComponent 
  },
  {
    path: 'register',
    component: RegistrationComponent 
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent 
  },
  {
    path: 'api-list',
    component: ShowApiListComponent 
  },
  {
    path: 'interview-failed',
    component: InterviewFailedComponent 
  },
  {
    path: 'inputvalue-click',
    component: InputDataonClickComponent
  },
  {
    path: 'class-toggle',
    component: ClassStylesToggleComponent
  },
  {
    path:'switch-case',
    component: SwitchCaseComponent
  },
  {
    path:'form-group',
    component: FormGroupComponent
  },
  {
    path:'form-array',
    component: FormArrayComponent
  },
  {
    path:'multifield-form-array',
    component: MultifieldFormArrayComponent
  },
  {
    path:'remove-array-list',
    component: RemoveArrayListComponent
  },
  {
    path:'nested-array',
    component: NestedArrayComponent
  },
  {
    path:'filter-and-sort',
    component: FilterAndSortComponent
  },
  {
    path:'min-max-value',
    component: MinMaxValueComponent
  },
  {
    path:'custom-directive-result',
    component: CustomDirectiveResultComponent
  },
  {
    path:'duplicate-array',
    component: DuplicateArrayComponent
  },
  {
    path:'print-keyvalue',
    component: PrintKeyvalueComponent
  },
  {
    path:'passing-routing-data',
    component: PassingRoutingDataComponent,
    data: {id: 1, name: "israr ahmad"} // passing as objects
  },
  {
    path:'pdf-create',
    component: PdfCreateComponent,
  },
  {
    path:'error-handling',
    component: ErrorHandlingComponent
  },
  {
    path:'chartjs',
    component: ChartjsComponent
  },
  {
    path:'transfer-array',
    component: TransferArrayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
