import {fetchAllPosts} from '@/server/fetcher';
import { ArticlesInfo } from '@/components/articles/ArticlesInfo/ArticlesInfo';
import {RecentArticles} from "@/components/articles/RecentArticles/RecentArticles";

export default async function Articles() {
    fetchAllPosts();

    return (
        <div>
            <ArticlesInfo articles={[]} />
            <h3 className="mt-8 mb-4">Recent articles</h3>
            <div className="flex justify-between gap-6">
                <RecentArticles  />
                <RecentArticles  />

            </div>
        </div>
    );
}