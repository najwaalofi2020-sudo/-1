import React from 'react';
import { ACTIVITIES } from '../constants';

interface ActivitiesProps {
  onSelectActivity: (activityId: string) => void;
}

const Activities: React.FC<ActivitiesProps> = ({ onSelectActivity }) => {
  // Sort activities to put 'quiz' at the end
  const sortedActivities = [...ACTIVITIES].sort((a, b) => {
    if (a.id === 'quiz') return 1;
    if (b.id === 'quiz') return -1;
    return 0;
  });

  return (
    <div className="animate-fade-in">
        <h2 className="text-center font-bold text-gray-600 mb-4">أو جربي هذه الأنشطة التفاعلية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedActivities.map((activity) => (
            <button
            key={activity.id}
            onClick={() => onSelectActivity(activity.id)}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-green-50 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 text-right flex flex-col items-start"
            >
                <div className="flex items-center w-full">
                    <div className="bg-green-100 text-green-700 p-3 rounded-lg ml-4">
                        <activity.icon className="w-8 h-8"/>
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">{activity.title}</span>
                </div>
                <p className="text-gray-500 mt-2 pr-2">{activity.description}</p>
            </button>
        ))}
        </div>
    </div>
  );
};

export default Activities;