PublicSource Story Dashboard - Updated Maintenance Guide

Overview

This guide provides instructions for maintaining and updating the PublicSource Story Dashboard, which now includes enhanced features such as article titles, author information, publication dates, and improved UI design.

Dashboard Features

Current Features (Updated)

•
Password Protection: Access code "publicsource-cmu"

•
Article Information: Displays title, author, and publication date

•
Smart Filtering: By category, geographic area, and neighborhoods

•
Keyword Search: Content-based search through story abstracts

•
Optimized UI: Removed redundant URLs, compact tag display with "more" functionality

•
Responsive Design: Works on desktop, tablet, and mobile

Live URLs

•
Current Dashboard: https://qlovzzeo.manus.space

•
GitHub Repository: https://github.com/Ziyan0219/open-news-classification-

Data Structure

The dashboard now processes the following information from each story URL:

•
Story URL (Column 0)

•
Umbrella/Category (Column 1)

•
Geographic Area (Column 2)

•
Neighborhoods (Column 3)

•
Social Media Abstract (Column 4)

•
Article Title (extracted from URL)

•
Author Name (extracted from URL)

•
Publication Date (extracted from URL)

Updating Content

Method 1: Using the Automated Script (Recommended)

1.
Prepare Your Excel File

•
Update your stories_classified_filled.xlsx file with new stories

•
Ensure the column structure remains the same

•
Save the file



2.
Run the Data Conversion Script

3.
Rebuild and Deploy

Method 2: Manual JSON Update

If you prefer to update the data manually:

1.
Edit the JSON File

•
Open src/data/stories.json

•
Add new story entries following this format:



2.
Update Filter Lists

•
Add new categories, areas, or neighborhoods to the filters section

•
Ensure all lists remain alphabetically sorted



Technical Implementation Details

Article Information Extraction

The system automatically extracts article information using web scraping:

Python


def extract_info(url):
    # Extracts title, author, and date from PublicSource articles
    # Handles various HTML patterns and fallbacks
    # Returns structured data for dashboard display


UI Improvements Implemented

1.
Removed redundant URLs from story cards

2.
Added article metadata (title, author, date) at the top of each card

3.
Reduced tag size by 20% for better space utilization

4.
Implemented "more" functionality for neighborhoods with many tags

5.
Enhanced responsive design for mobile devices

File Structure

Plain Text


news-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── StoryCard.jsx (Updated with new UI)
│   │   ├── FilterPanel.jsx
│   │   ├── KeywordSearch.jsx
│   │   └── Login.jsx
│   ├── data/
│   │   └── stories.json (Enhanced with article metadata)
│   └── App.jsx
├── convert_excel_to_json.py (Updated with web scraping)
└── package.json


Troubleshooting

Common Issues

1.
Article Information Not Extracting

•
Check if the URL is accessible

•
Verify the PublicSource website structure hasn't changed

•
Review the extraction script for HTML pattern updates



2.
Build Failures

3.
Data Not Updating

•
Ensure the JSON file was properly generated

•
Check browser cache (hard refresh with Ctrl+F5)

•
Verify the build process completed successfully



Performance Considerations

•
The article extraction process may take several minutes for large datasets

•
Consider running updates during off-peak hours

•
Monitor for rate limiting from the PublicSource website

Security Notes

•
The dashboard remains password-protected with "publicsource-cmu"

•
All article extraction respects robots.txt and reasonable request rates

•
No sensitive data is stored or transmitted

Future Enhancements

Potential Improvements

1.
Automated Updates: Set up scheduled data refreshes

2.
Advanced Analytics: Add story performance metrics

3.
Export Features: Allow data export in various formats

4.
User Management: Multiple access levels and user accounts

5.
API Integration: Direct connection to PublicSource CMS

Maintenance Schedule

•
Weekly: Review new stories and update data

•
Monthly: Check for broken links and update extraction patterns

•
Quarterly: Review UI/UX and implement user feedback

Support and Contact

For technical issues or questions about this dashboard:

1.
Check this maintenance guide first

2.
Review the GitHub repository for recent updates

3.
Contact your system administrator for deployment access

4.
For major changes, consider consulting with the original developer

