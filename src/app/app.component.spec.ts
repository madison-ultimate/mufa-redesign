import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { AppModule } from "./app.module";
import { APP_BASE_HREF } from "@angular/common";
describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppModule],
        providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
      }).compileComponents();
    })
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'app'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual("MUFA");
    })
  );
  it(
    "should render title in a h1 tag",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("h1").textContent).toContain("MUFA");
    })
  );
});
