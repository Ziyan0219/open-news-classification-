import React from 'react';
import { ExternalLink, MapPin, Building, Home } from 'lucide-react';

const StoryCard = ({ story }) => {
  const getHostname = (url) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  return (
    <div className="news-card p-6 h-full flex flex-col">
      {/* Story Link */}
      <div className="mb-4">
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-link text-lg font-semibold hover:text-blue-800 transition-colors duration-200 flex items-start gap-2"
        >
          <span className="flex-1">{getHostname(story.url)}</span>
          <ExternalLink className="h-4 w-4 mt-1 flex-shrink-0" />
        </a>
      </div>

      {/* Social Media Abstract */}
      <div className="mb-4 flex-1">
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
          {story.social_abstract.replace(/^"|"$/g, '')}
        </p>
      </div>

      {/* Classification Info */}
      <div className="space-y-2 text-xs">
        {/* Umbrella */}
        <div className="flex items-center gap-2">
          <Building className="h-3 w-3 text-blue-600 flex-shrink-0" />
          <span className="text-gray-600 font-medium">Category:</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
            {story.umbrella}
          </span>
        </div>

        {/* Geographic Area */}
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3 text-green-600 flex-shrink-0" />
          <span className="text-gray-600 font-medium">Area:</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
            {story.geographic_area}
          </span>
        </div>

        {/* Neighborhoods */}
        {story.neighborhoods && (
          <div className="flex items-start gap-2">
            <Home className="h-3 w-3 text-orange-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 font-medium">Neighborhoods:</span>
            <div className="flex-1">
              <div className="flex flex-wrap gap-1">
                {story.neighborhoods.split(',').slice(0, 3).map((neighborhood, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium"
                  >
                    {neighborhood.trim()}
                  </span>
                ))}
                {story.neighborhoods.split(',').length > 3 && (
                  <span className="text-gray-500 px-2 py-1">
                    +{story.neighborhoods.split(',').length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Read Full Story Button */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
        >
          <span>Read Full Story</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default StoryCard;

