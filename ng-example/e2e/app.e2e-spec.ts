import { NgCourseDemoPage } from './app.po';

describe('ng-course-demo App', () => {
  let page: NgCourseDemoPage;

  beforeEach(() => {
    page = new NgCourseDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Course');
  });

  it('should have header', () => {
    page.navigateTo();
    expect(page.getHeader().isPresent()).toEqual(true);
  });
});
