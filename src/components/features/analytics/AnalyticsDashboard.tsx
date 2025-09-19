import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Clock, Eye, MessageSquare, MousePointer, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  topEvents: Array<{ event: string; count: number }>;
  engagementScore: number;
  scrollDepth: number;
  formSubmissions: number;
  cateringInquiries: number;
}

const AnalyticsDashboard = () => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    topEvents: [],
    engagementScore: 0,
    scrollDepth: 0,
    formSubmissions: 0,
    cateringInquiries: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading - in real implementation, this would fetch from Google Analytics API
    const loadAnalyticsData = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with real Google Analytics API calls
      setData({
        pageViews: 1247,
        uniqueVisitors: 892,
        bounceRate: 34.2,
        avgSessionDuration: 3.45,
        conversionRate: 8.7,
        topPages: [
          { page: '/', views: 456 },
          { page: '/catering', views: 234 },
          { page: '/spezialitaeten', views: 198 },
          { page: '/speisekarte', views: 156 },
          { page: '/ueber-uns', views: 89 },
        ],
        topEvents: [
          { event: 'order_button_click', count: 89 },
          { event: 'catering_inquiry', count: 45 },
          { event: 'form_submission', count: 23 },
          { event: 'scroll_depth_75', count: 156 },
          { event: 'menu_item_view', count: 234 },
        ],
        engagementScore: 78,
        scrollDepth: 72,
        formSubmissions: 23,
        cateringInquiries: 45,
      });
      
      setIsLoading(false);
    };

    loadAnalyticsData();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <Button onClick={() => window.open('https://analytics.google.com', '_blank')}>
          View in Google Analytics
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Page Views</p>
                <p className="text-2xl font-bold">{data.pageViews.toLocaleString()}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Unique Visitors</p>
                <p className="text-2xl font-bold">{data.uniqueVisitors.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Engagement Score</p>
                <p className="text-2xl font-bold">{data.engagementScore}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Catering Inquiries</p>
                <p className="text-2xl font-bold">{data.cateringInquiries}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Top Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{page.page}</span>
                  <Badge variant="secondary">{page.views} views</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MousePointer className="h-5 w-5" />
              Top Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.topEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{event.event.replace(/_/g, ' ')}</span>
                  <Badge variant="outline">{event.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Bounce Rate</p>
                <p className="text-2xl font-bold">{data.bounceRate}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Session Duration</p>
                <p className="text-2xl font-bold">{data.avgSessionDuration}m</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold">{data.conversionRate}%</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">High Engagement</h4>
              <p className="text-green-700 text-sm">
                Your catering page has {data.cateringInquiries} inquiries with a {data.engagementScore}% engagement score.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">Content Performance</h4>
              <p className="text-blue-700 text-sm">
                Users are scrolling {data.scrollDepth}% on average, indicating good content engagement.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800">Conversion Opportunity</h4>
              <p className="text-orange-700 text-sm">
                With {data.formSubmissions} form submissions, consider optimizing the contact flow.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
