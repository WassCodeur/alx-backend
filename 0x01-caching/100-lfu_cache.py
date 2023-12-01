#!/usr/bin/env python3
"""lfu cache replacement policy"""
from collections import OrderedDict, defaultdict


BaseCaching = __import__('base_caching').BaseCaching


class LFUCache(BaseCaching):
    """LFU cache
    inherit from BaseCaching class
    """
    def __init__(self):
        super().__init__()
        self.cache_data = OrderedDict()
        self.counter = defaultdict(int)

    def put(self, key, item):
        """put data in chache

        Arguments
        ---------
        key: str
        item: any

        Return
        ------
        None
        """
        if key is None or item is None:
            pass
        else:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                if len(self.counter.items()) > 0:
                    lfu_key = min(self.counter.items())[0]
                    value = self.cache_data.pop(lfu_key)
                    print(f"DISCARD: {lfu_key}")
                    self.counter.pop(lfu_key)
            self.cache_data[key] = item

    def get(self, key):
        """get iten by key

        Argument
        --------
        key: str

        Return
        ------

        self.cache_data[key] or None
        """
        if key in self.cache_data:
            self.counter[key] += 1
            return self.cache_data[key]

        return None
