import { NgModule, Renderer2 } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthSuccessComponent } from './auth-success/auth-success.component';
import { AuthUpdateListComponent } from './auth-update-list/auth-update-list.component';
import { ChildComponent } from './child/child.component';
import { ClassStylesToggleComponent } from './class-styles-toggle/class-styles-toggle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeoLocationComponent } from './geo-location/geo-location.component';
import { InputDataonClickComponent } from './input-dataon-click/input-dataon-click.component';
import { InputTrueFalseComponent } from './input-true-false/input-true-false.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResponsiveMenusComponent } from './responsive-menus/responsive-menus.component';
import { ShowApiListComponent } from './show-api-list/show-api-list.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { LoadmoreDataComponent } from './loadmore-data/loadmore-data.component';
import { InterviewFailedComponent } from './interview-failed/interview-failed.component';
import { ReviseApiListComponent } from './revise-api-list/revise-api-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPaginationModule } from 'ngx-pagination';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { RemoveArrayListComponent } from './remove-array-list/remove-array-list.component';
import { TransferArrayComponent } from './transfer-array/transfer-array.component';
import { NestedArrayComponent } from './nested-array/nested-array.component';
import { FilterAndSortComponent } from './filter-and-sort/filter-and-sort.component';
import { MinMaxValueComponent } from './min-max-value/min-max-value.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomDirectiveResultComponent } from './custom-directive-result/custom-directive-result.component';
import { DuplicateArrayComponent } from './duplicate-array/duplicate-array.component';
import { PrintKeyvalueComponent } from './print-keyvalue/print-keyvalue.component';
import { MultifieldFormArrayComponent } from './multifield-form-array/multifield-form-array.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { PassingRoutingDataComponent } from './passing-routing-data/passing-routing-data.component';
import { SearchPipe } from './pipe/search.pipe';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { MatPaginationComponent } from './mat-pagination/mat-pagination.component';
import {MatPaginatorModule,} from '@angular/material/paginator';
import { PdfCreateComponent } from './pdf-create/pdf-create.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent,
    DashboardComponent,
    ClassStylesToggleComponent,
    InputDataonClickComponent,
    ReactiveFormComponent,
    ShowApiListComponent,
    UpdateDataComponent,
    RegistrationComponent,
    ResponsiveMenusComponent,
    AuthRegisterComponent,
    AuthLoginComponent,
    AuthSuccessComponent,
    GeoLocationComponent,
    ParentComponent,
    ChildComponent,
    AuthUpdateListComponent,
    InputTrueFalseComponent,
    LoadmoreDataComponent,
    InterviewFailedComponent,
    ReviseApiListComponent,
    UploadImageComponent,
    ViewChildComponent,
    FormArrayComponent,
    RemoveArrayListComponent,
    TransferArrayComponent,
    NestedArrayComponent,
    FilterAndSortComponent,
    MinMaxValueComponent,
    CustomDirectiveDirective,
    CustomDirectiveResultComponent,
    DuplicateArrayComponent,
    PrintKeyvalueComponent,
    MultifieldFormArrayComponent,
    FormGroupComponent,
    PassingRoutingDataComponent,
    SearchPipe,
    ErrorHandlingComponent,
    MatPaginationComponent,
    PdfCreateComponent,
    ChartjsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxPaginationModule,
    MatPaginatorModule,
    
  ],
  providers: [
    // SearchPipe,
   {
     provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptorInterceptor,
     multi: true
   },
  //  {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: ErrorInterceptor,
  //   multi: true
  //  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
